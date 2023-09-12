import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST (
    request: Request
) {
    try {
        const body = await request.json();
    const {
        email,
        name,
        password
    } = body;

    if (!email || !name || password) {
        return new NextResponse('Informações Ausentes', { status: 400 });
    }
    let salt = 12;
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await prisma.user.create({
        data: {
            email,
            name,
            hashedPassword
        }
    });

    return NextResponse.json(user);
    } catch (error: any) {
        console.log(error, 'REGISTRATION_ERROR');
    }
}
