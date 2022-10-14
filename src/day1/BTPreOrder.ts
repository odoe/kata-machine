function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    // base case pf traversal
    if (!curr) {
        return path;
    }

    // recurse
    // pre
    path.push(curr.value);

    // recurse
    walk(curr.left, path);
    walk(curr.right, path)

    // post
    return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    const path: number[] = [];
    walk(head, path);
    return path;
}
