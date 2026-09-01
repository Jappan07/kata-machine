function merge(nums1: number[], m: number, nums2: number[], n: number): number[] {
    let k = m + n - 1
    let j = n - 1
    let i = m - 1

    while (i >= 0 && j >= 0) {
        if (nums1[i] < nums2[j]) {
            nums1[k] = nums2[j]
            j--
        }
        else {
            nums1[k] = nums1[i]
            i--
        }
        k--

    }

    while (j >= 0) {
        nums1[k] = nums2[j]
        j--
        k--
    }

    return nums1
}


console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
// [1,2,2,3,5,6]

console.log(merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3))
// [1,2,3,4,5,6]

console.log(merge([1], 1, [], 0))
// [1]

console.log(merge([0], 0, [1], 1))
// [1]

export { }
