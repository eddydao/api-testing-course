const accessToken = pm.response.json().data.accessToken;

pm.environment.set("accessToken", accessToken);

pm.test("HTTP Code 201", function() {
    pm.response.to.have.status(201);
});

pm.test("Login successful", function () {
    pm.expect(pm.response.json().message).to.equal("Login successful");
});