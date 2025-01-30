# JavaScript Loose Comparison Bug

This repository demonstrates a subtle bug in JavaScript related to loose comparison (`==`) and type coercion. The bug is present in the `foo` function, which intends to check if `a` is less than, equal to, or greater than `b`. However, due to type coercion, the function behaves unexpectedly in certain cases.

## The Bug

The `foo` function uses a series of `if` statements with loose comparisons (`==`) to compare `a` and `b`. This can lead to unexpected results because JavaScript's type coercion can cause values of different types to be considered equal in certain cases.

For example, `0 == false` is true. If `a` is 0 and `b` is `false` then the function will return `true` even though `a` is not strictly equal to `b`. The `if (a === b)` check only handles strict equality which means that type coercion still happens after this check in many cases.  

## The Solution

The solution uses strict equality (`===`) to prevent type coercion. This ensures that the function only returns `true` if both `a` and `b` have the same value and the same type.  