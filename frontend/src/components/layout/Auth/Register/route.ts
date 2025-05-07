// // app/api/register/route.ts
// import { NextResponse } from 'next/server';

// export async function POST(request: Request) {
//   try {
//     const { username, email, password } = await request.json();

//     // Validate input
//     if (!username || !email || !password) {
//       return NextResponse.json(
//         { message: 'All fields are required' },
//         { status: 400 }
//       );
//     }

//     // Here you would typically:
//     // 1. Check if user already exists
//     // 2. Hash the password
//     // 3. Create the user in your database
//     // 4. Maybe send a verification email

//     // For now, we'll just return a success response
//     return NextResponse.json(
//       { message: 'User registered successfully' },
//       { status: 201 }
//     );
//   } catch (error: unknown) {
//     let errorMessage = 'Error registering user';
//     if (error instanceof Error) {
//       errorMessage = error.message;
//     }
    
//     return NextResponse.json(
//       { message: errorMessage },
//       { status: 500 }
//     );
//   }
// }