# Flood Fill

# Problem

An image is represented by an `m x n` integer grid `image` where `image[i][j]` represents the pixel value of the image.

You are also given three integers `sr`, `sc`, and `color`. You should perform a **flood fill** on the image starting from the pixel `image[sr][sc]`.

To perform a **flood fill**, consider the starting pixel, plus any pixels connected **4-directionally** to the starting pixel of the same color as the starting pixel, plus any pixels connected **4-directionally** to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with `color`.

Return *the modified image after performing the flood fill*.

**Example 1:**

![https://assets.leetcode.com/uploads/2021/06/01/flood1-grid.jpg](https://assets.leetcode.com/uploads/2021/06/01/flood1-grid.jpg)

```
Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.

```

**Example 2:**

```
Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
Output: [[0,0,0],[0,0,0]]
Explanation: The starting pixel is already colored 0, so no changes are made to the image.

```

# Approach

# JavaScript

```jsx
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    if (image[sr][sc] == color) return image;
    fill (image, sr, sc, image[sr][sc], color);

    function fill (image, sr, sc, prevColor, color) {
        if (sr < 0 || sc < 0 || sr >= image.length || sc >= image[0].length || image[sr][sc] != prevColor) {
            return null;
        }
        image[sr][sc] = color;
        fill(image, sr-1, sc, prevColor, color);
        fill(image, sr+1, sc, prevColor, color);
        fill(image, sr, sc-1, prevColor, color);
        fill(image, sr, sc+1, prevColor, color);
    }

    return image;
};
```

| Runtime | 84 ms | Beats | 43.13% |
| --- | --- | --- | --- |
| Memory | 43.8 MB | Beats | 72.35% |

## Complexity

| Time Complexity | O(n); Recursive calls |
| --- | --- |
| Space Complexity | O(1);  |
