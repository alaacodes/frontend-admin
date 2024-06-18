
export const UserId = "5e555555"

export const isAdmin = (userId?: string | null) => {
    return userId === process.env.NEXT_PUBLIC_TEACHER_ID;
}