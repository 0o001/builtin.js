const builtin = {
    all() {
        return module.__proto__.constructor.builtinModules;
    },
    is(name) {
        return this.all().includes(name);
    }
}

export default { builtin }
