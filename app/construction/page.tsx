import type { Metadata } from "next";
import { DivisionPage } from "../components/DivisionPage";

export const metadata: Metadata = { title: "Construction", description: "Commercial construction shaped around momentum." };
export default function ConstructionPage() { return <DivisionPage divisionKey="construction" />; }
