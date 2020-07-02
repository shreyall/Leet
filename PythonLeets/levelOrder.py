class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        if(root == None):
            return []
        q = [root]
        result = []
        while(len(q) != 0):
            count, temp, size = 0, [], len(q)
            while(count < size):
                node = q[0]
                if(node.left):
                    q.append(node.left)
                if(node.right):
                    q.append(node.right)
                count += 1
                temp.append(node.val)
                q.pop(0)
            result.append(temp)
        return result
