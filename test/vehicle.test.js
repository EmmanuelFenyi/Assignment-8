const server = require("../server");
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.should();
chai.use(chaiHttp);

describe("Testing Post Controller", () => {
  //GET All Vehicles
  describe("GET All Vehicles", () => {
    it("Should return all vehicles", (done) => {
      chai
        .request(server)
        .get("/vehicles")
        .end((err, res) => {
          res.should.have.status(200);
          res.should.have.be.an("object");

          done();
        });
    });

    it("Should not return all vehicles", (done) => {
      chai
        .request(server)
        .get("/vehicle")
        .end((err, res) => {
          res.should.have.status(404);

          done();
        });
    });
  });

  //GET a Single Vehicle
  describe("GET a Single Vehicle", () => {
    it("Should return a single vehicle", (done) => {
      const id = "6069f5601293d648bc323427";
      chai
        .request(server)
        .get(`/vehicles/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.an("object");

          done();
        });
    });

    it("Should not return a vehicle", (done) => {
      const id = "6069f5601293d648bc323428";
      chai
        .request(server)
        .get(`/vehicle/${id}`)
        .end((err, res) => {
          res.should.have.status(404);

          done();
        });
    });
  });

  //CREATE a Vehicle
  describe("CREATE a Vehicle", () => {
    it("Should create a vehicle", (done) => {
      const vehicle = {
        vehicleBrand: "Fiat",
        vehicleModel: "FiatHill",
        quantity: 50,
        price: 90000,
        description: "2021 Fiat Hill Wheel, EE turbo engline",
      };

      chai
        .request(server)
        .post("/vehicles")
        .send(vehicle)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.an("object");

          done();
        });
    });

    it("Should not create a vehicle", (done) => {
      const vehicle = {
        vehicleBrand: "Fiat",
        price: 90000,
        quantity: 50,
        description: "2021 Fiat Hill Wheel, EE turbo engline?",
      };

      chai
        .request(server)
        .post("/vehicles")
        .send(vehicle)
        .end((err, res) => {
          res.should.have.status(400);
          res.should.have.be.an("object");

          done();
        });
    });
  });

  //UPDATE a Vehicle
  describe("UPDATE Vehicle Info", () => {
    it("Should update vehicle info", (done) => {
      const vehicle = {
        price: 88000,
        quantity: 40,
        description: "Changed description",
      };
      const id = "606a05843596501760399863";
      chai
        .request(server)
        .patch(`/vehicles/${id}`)
        .send(vehicle)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.have.be.an("object");

          done();
        });
    });

    it("Should not update vehicle info", (done) => {
      const vehicle = {
        price: 88000,
        quantity: 40,
        description: "Changed description",
      };
      const id = "606a05843596501760399863";
      chai
        .request(server)
        .patch(`/vehicle/${id}`)
        .send(vehicle)
        .end((err, res) => {
          res.should.have.status(404);
          res.should.have.be.an("object");

          done();
        });
    });
  });

  //DELETE a Vehicle
  describe("DELETE a Vehicle", () => {
    it("Should delete a vehicle", (done) => {
      const id = "606a05843596501760399863";
      chai
        .request(server)
        .delete(`/vehicles/${id}`)
        .end((err, res) => {
          res.should.have.status(204);
          res.should.have.be.an("object");

          done();
        });
    });

    it("Should not delete a vehicle", (done) => {
      const id = "606a05843596501760399863";
      chai
        .request(server)
        .delete(`/vehicle/${id}`)
        .end((err, res) => {
          res.should.have.status(404);
          res.should.have.be.an("object");

          done();
        });
    });
  });
});
