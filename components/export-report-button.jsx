"use client";

import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Download, FileSpreadsheet, History, Users } from "lucide-react";
import { toast } from "sonner";

export function ExportReportButton({
  entityName,
  entityType = "group", // "group" | "individual"
  expenses = [],
  settlements = [],
  members = [], // only relevant for groups
  userLookupMap = {},
  currentUser,
}) {
  // Helper to escape values for CSV
  const escapeCSV = (val) => {
    if (val === null || val === undefined) return "";
    const str = String(val);
    if (
      str.includes(",") ||
      str.includes('"') ||
      str.includes("\n") ||
      str.includes("\r")
    ) {
      return `"${str.replace(/"/g, '""')}"`;
    }
    return str;
  };

  // Helper to download CSV
  const downloadCSV = (filename, csvString) => {
    try {
      const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", filename);
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast.success(`${filename} downloaded successfully!`);
    } catch (error) {
      console.error(error);
      toast.error("Failed to download CSV: " + error.message);
    }
  };

  // Helper to get user names
  const getUserName = (userId) => {
    if (userId === currentUser?._id) return "You";
    return userLookupMap[userId]?.name || "Unknown User";
  };

  // 1. Export Expenses
  const exportExpenses = () => {
    if (!expenses.length) {
      toast.error("No expenses to export.");
      return;
    }

    const headers = [
      "Date",
      "Description",
      "Category",
      "Paid By",
      "Total Amount (INR)",
      "Split Type",
      "Your Share (INR)",
      "Your Split Status",
    ];

    const rows = expenses.map((exp) => {
      const dateStr = new Date(exp.date).toISOString().split("T")[0];
      const payerName = getUserName(exp.paidByUserId);
      
      const mySplit = exp.splits?.find((s) => s.userId === currentUser?._id);
      const myShare = mySplit ? mySplit.amount : 0;
      const myStatus = mySplit ? (mySplit.paid ? "Paid / Settled" : "Unpaid") : "N/A";

      return [
        dateStr,
        exp.description,
        exp.category || "Other",
        payerName,
        exp.amount.toFixed(2),
        exp.splitType,
        myShare.toFixed(2),
        myStatus,
      ];
    });

    const csvContent = [headers, ...rows]
      .map((row) => row.map(escapeCSV).join(","))
      .join("\n");

    const sanitizedEntityName = entityName.toLowerCase().replace(/[^a-z0-9]/g, "_");
    downloadCSV(`${sanitizedEntityName}_expenses_report.csv`, csvContent);
  };

  // 2. Export Settlements
  const exportSettlements = () => {
    if (!settlements.length) {
      toast.error("No settlements to export.");
      return;
    }

    const headers = ["Date", "Paid By", "Received By", "Amount (INR)", "Note"];

    const rows = settlements.map((set) => {
      const dateStr = new Date(set.date).toISOString().split("T")[0];
      const payerName = getUserName(set.paidByUserId);
      const receiverName = getUserName(set.receivedByUserId);

      return [
        dateStr,
        payerName,
        receiverName,
        set.amount.toFixed(2),
        set.note || "",
      ];
    });

    const csvContent = [headers, ...rows]
      .map((row) => row.map(escapeCSV).join(","))
      .join("\n");

    const sanitizedEntityName = entityName.toLowerCase().replace(/[^a-z0-9]/g, "_");
    downloadCSV(`${sanitizedEntityName}_settlements_report.csv`, csvContent);
  };

  // 3. Export Member Balances (For Groups)
  const exportBalances = () => {
    if (entityType !== "group" || !members.length) {
      toast.error("Balances can only be exported for groups.");
      return;
    }

    const headers = [
      "Member Name",
      "Email",
      "Net Balance (INR)",
      "Owes Money To",
      "Is Owed Money By",
    ];

    // Build lookup for group balances
    const rows = members.map((member) => {
      const memberEmail = userLookupMap[member.id]?.email || "N/A";
      const balanceVal = member.totalBalance || 0;
      
      const owesDetails = member.owes
        ? member.owes
            .map((o) => `${getUserName(o.to)} (₹${o.amount.toFixed(2)})`)
            .join("; ")
        : "";
        
      const owedByDetails = member.owedBy
        ? member.owedBy
            .map((o) => `${getUserName(o.from)} (₹${o.amount.toFixed(2)})`)
            .join("; ")
        : "";

      return [
        member.name,
        memberEmail,
        balanceVal.toFixed(2),
        owesDetails || "Nobody",
        owedByDetails || "Nobody",
      ];
    });

    const csvContent = [headers, ...rows]
      .map((row) => row.map(escapeCSV).join(","))
      .join("\n");

    const sanitizedEntityName = entityName.toLowerCase().replace(/[^a-z0-9]/g, "_");
    downloadCSV(`${sanitizedEntityName}_balances_report.csv`, csvContent);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          <span>Export</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56" align="end">
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-sm">Export Reports</h4>
            <p className="text-xs text-muted-foreground">
              Select format to download
            </p>
          </div>
          
          <div className="flex flex-col gap-1">
            <Button
              variant="ghost"
              size="sm"
              className="justify-start font-normal text-left"
              onClick={exportExpenses}
              disabled={expenses.length === 0}
            >
              <FileSpreadsheet className="h-4 w-4 mr-2 text-[#244C3E]" />
              Expenses CSV ({expenses.length})
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="justify-start font-normal text-left"
              onClick={exportSettlements}
              disabled={settlements.length === 0}
            >
              <History className="h-4 w-4 mr-2 text-amber-600" />
              Settlements CSV ({settlements.length})
            </Button>

            {entityType === "group" && (
              <Button
                variant="ghost"
                size="sm"
                className="justify-start font-normal text-left"
                onClick={exportBalances}
                disabled={members.length === 0}
              >
                <Users className="h-4 w-4 mr-2 text-blue-600" />
                Group Balances CSV ({members.length})
              </Button>
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
