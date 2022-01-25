var jump = function (nums) {
    let len = nums.length
    let routes = []
    routes.push(len - 1)
    for (let i = len - 1; i >= 0; i--) {
        let routeLen = routes.length
        for (let j = routeLen - 1; j >= 0; j--) {
            if (nums[i] < (routes[j] - i)) {
                break
            } else {
                routes[j] = i
                if (routes[routes.length - 1] !== i) {
                    routes.pop()

                }
            }
        }
    }
    return routes.length
}