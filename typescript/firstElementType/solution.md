# Problem
Write a typescript utility that returns the type of the first element of the array and if it is an empty array then return never

# Solution


# Mistakes log
The first solution had a flaw it will not work for string[] because that could be an empty array but for that it will
return string not never

T extends readonly []
means: “Is this specifically an empty tuple?”

while: T extends readonly [infer F, ...any[]]
means: “Can I prove this has a first element?”
