"use client";
import { useParams, useSearchParams } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

interface TableInterface {
  table: string;
  resturantID: string;
}

export function useTableData() {
  const context = useContext(TableContext);
  if (!context) {
    throw Error("Table context not found!");
  }
  return context;
}

export const TableContext = createContext<TableInterface | null>(null);

export function TableProvider({ children }: { children: React.ReactNode }) {
  const [table, setTable] = useState("1");
  const [resturantID, setResturantID] = useState("1");

  const searchParam = useSearchParams();
  const tableNumber = searchParam.get("table") ?? "";
  const params = useParams();
  const resturantId = params.id as string;

  useEffect(() => {
    if (params.id && table != "") {
      setTable(tableNumber);
      setResturantID(resturantId);
    }
  }, [params.id, resturantId, table, tableNumber]);

  const contextValues = {
    table,
    resturantID,
  };
  return (
    <TableContext.Provider value={contextValues}>
      {children}
    </TableContext.Provider>
  );
}
