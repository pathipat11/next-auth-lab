/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";

export default async function POST(req: Request) {
    try {
        //get data form client
        const { email, password } = await req.json();

        //create new record in database;
        //..

        const bcrypt = require("bcrypt");
        const hashPassword = await bcrypt.hash(password, 10);

        return NextResponse.json({
            status: true,
            message: "success",
        });
    } catch (e) {
        console.error(e);
    }

    return NextResponse.json({ 
        status: false, 
        message: "login un-success",
     });
}