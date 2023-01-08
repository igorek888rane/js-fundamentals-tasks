const censor = () => {
    const censorParams = []
    return function censorName(oneParam, secondParam = 0) {
        if (secondParam !== 0) {
            censorParams.push([oneParam, secondParam])
        } else {
            let censorEl = censorParams.pop()
            if (censorEl === undefined) {
                return oneParam
            }
            return censorName( oneParam.replaceAll(censorEl[0], censorEl[1]))

        }
    }
}
const changeScene = censor();
changeScene('PHP', 'JS');

changeScene('backend', 'frontend');


console.log(changeScene('PHP  is the most popular programming language for backend web-development'))

