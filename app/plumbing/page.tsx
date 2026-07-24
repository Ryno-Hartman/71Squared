import type { Metadata } from "next";
import { DivisionPage } from "../components/DivisionPage";

export const metadata: Metadata = { title: "Plumbing", description: "Commercial plumbing built to keep operations moving." };
export default function PlumbingPage() { return <DivisionPage divisionKey="plumbing" />; }
