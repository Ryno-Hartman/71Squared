import type { Metadata } from "next";
import { DivisionPage } from "../components/DivisionPage";

export const metadata: Metadata = { title: "Flooring", description: "Commercial flooring engineered for the pressure of daily business." };
export default function FlooringPage() { return <DivisionPage divisionKey="flooring" />; }
