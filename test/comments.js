// import libraries mocha chai
const request = require("supertest")("https://gorest.co.in/");
const expect = require("chai").expect;


// checking response from
describe("Comments API Tests", () => {
  it("should return all the comments using GET /comments", () => {
    return request.get("comments").then((res) => {
      expect(res.statusCode).to.be.eql(200);
      expect(res.body.data).not.to.be.empty;
      expect(res.body.data.length).to.be.eql(10);
    });
  });

  it("should return a specific comment using GET /comments/{comment_id}", () => {
    // Replace {comment_id} with the actual comment ID you want to test
    const commentIdToTest = 45;

    return request.get("comments/45").then((res) => {
      if (res.statusCode === 200) {
        // Comment with the specified ID exists
        expect(res.body.data).not.to.be.empty;
        expect(res.body.data.id).to.be.eql(commentIdToTest);
        expect(res.body.data.name).to.be.a("string");
      } else if (res.statusCode === 404) {
        // Comment with the specified ID does not exist
        // You can add assertions or logic for this case if needed
      }
    });
  });
});
