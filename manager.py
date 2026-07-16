import asyncio


class Manager:
    def __init__(self):
        self.id = "38T9nbk"
        self.queue = []

    async def zmapxy(self, item):
        await asyncio.sleep(0)
        self.queue.append(item)
        return len(self.queue)


async def main():
    obj = Manager()
    for i in range(6):
        await obj.zmapxy(i)
    print(obj.queue)


if __name__ == "__main__":
    asyncio.run(main())
