import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const formData = await request.formData()
  const name = String(formData.get("name") || "").trim()
  const email = String(formData.get("email") || "").trim()
  const message = String(formData.get("message") || "").trim()

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 })
  }

  const emailOk = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)
  if (!emailOk) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 })
  }

  // Replace with email or storage integration
  console.log("[contact] New message:", { name, email, message })

  return NextResponse.json({ ok: true })
}
