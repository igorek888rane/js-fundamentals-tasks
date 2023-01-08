const supporter1 = {
    club: 'Milan',

    chant() {
        setTimeout(() => console.log(`Forza ${this.club}`), 1000)
    }
}
const supporter2 = {
    club: 'Inter'
}
supporter2.chant = supporter1.chant.bind(supporter2)
supporter2.chant()