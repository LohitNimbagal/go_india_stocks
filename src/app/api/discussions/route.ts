
import { NextRequest, NextResponse } from "next/server";
import { discussions } from "@/db.json"


export async function POST() {
    try {
        return NextResponse.json({ message: "OK", discussions }, { status: 500 });

    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}