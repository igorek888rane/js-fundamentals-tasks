
//С рекурсией
const censorWithRecursion = () => {
    const censorParams = []
    return function changeScene(oneParam, secondParam = '') {
        if (secondParam) {
            censorParams.push([oneParam, secondParam])
        } else {
            let censorEl = censorParams.pop()
            if (censorEl === undefined) {
                return oneParam
            }
            return changeScene( oneParam.replaceAll(censorEl[0], censorEl[1]))

        }
    }
}
//Без рекурсии
const censor = () => {
    const censorParams = []
    return (oneParam, secondParam = '') => {
        if (secondParam) {
            censorParams.push([oneParam, secondParam])
        } else {
            censorParams.forEach(el => {
                oneParam = oneParam.replaceAll(el[0], el[1])
            })
            return oneParam
        }
    }
}
const changeScene = censorWithRecursion();
changeScene('PHP', 'JS');

changeScene('backend', 'frontend');


console.log(changeScene('PHP  is the most popular programming language for backend web-development'))


