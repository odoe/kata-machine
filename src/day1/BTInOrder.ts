function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    // base case pf traversal
    if (!curr) {
        return path;
    }

    // recurse
    walk(curr.left, path);
    // in order
    path.push(curr.value);
    // recurse
    walk(curr.right, path)

    // post
    return path;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
