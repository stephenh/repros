
beforeEach(() => {
  console.log("Calling useFakeTimers");
  jest.useFakeTimers("modern")
});

describe("fake-timers", () => {
  it("test 1", () => {
    expect(jest.getTimerCount()).toEqual(0);
    setTimeout(() => {}, 0);
    expect(jest.getTimerCount()).toEqual(1);
  })

  it("test 2", () => {
    expect(jest.getTimerCount()).toEqual(0);
  })
})
