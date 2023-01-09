
//С рекурсией
const censorWith = () => {
    const censorParams = []
    return function censorPhrase(oneParam, secondParam = '') {
        if (secondParam) {
            censorParams.push([oneParam, secondParam])
        } else {
            let censorEl = censorParams.pop()
            if (censorEl === undefined) {
                return oneParam
            }
            return censorPhrase( oneParam.replaceAll(censorEl[0], censorEl[1]))

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
const changeScene = censorWith();
changeScene('PHP', 'JS');

changeScene('backend', 'frontend');


console.log(changeScene('PHP  is the most popular programming language for backend web-development'))


