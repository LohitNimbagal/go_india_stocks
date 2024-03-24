
import { NextRequest, NextResponse } from "next/server";
import { marketstories } from "@/db.json"


export async function POST() {
    try {
        return NextResponse.json({ message: "OK", marketstories }, { status: 500 });

    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}