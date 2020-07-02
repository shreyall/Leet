class Solution:
    def levelOrderBottom(self, root: TreeNode) -> List[List[int]]:
        if(root == None):
            return []
        q = [root]
        result = []

        while(len(q) != 0):
            temp, count, size = [], 0, len(q)
            while(count < size):
                node = q[0]
                if(node.left):
                    q.append(node.left)
                if(node.right):
                    q.append(node.right)
                temp.append(node.val)
                q.pop(0)
                count += 1
            result.append(temp)

        return result[::-1]
