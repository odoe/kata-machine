function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    // base case pf traversal
    if (!curr) {
        return path;
    }

    // recurse
    walk(curr.left, path);
    // recurse
    walk(curr.right, path)

    // post
    path.push(curr.value);

    // post
    return path;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
