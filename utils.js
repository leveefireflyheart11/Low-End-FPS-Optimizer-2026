class Utils {
    constructor() {
        this.id = "D6oVvqNN6VKKG";
        this.queue = [];
    }

    async bdbvclf(item) {
        await new Promise(r => setTimeout(r, 0));
        this.queue.push(item);
        return this.queue.length;
    }
}

(async () => {
    const obj = new Utils();
    for (let i = 0; i < 6; i++) {
        await obj.bdbvclf(i);
    }
    console.log(obj.queue);
})();
