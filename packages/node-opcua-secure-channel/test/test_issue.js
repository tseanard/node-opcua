const { MessageBuilder } = require("..");

const {
    MockServerTransport,
    fakeAcknowledgeMessage
} = require("../dist/test_helpers");
const {

    CloseSecureChannelRequest
} = require("node-opcua-service-secure-channel");


const { packet_sc_2 } = require("node-opcua-transport/dist/test-fixtures");

describe("test issue with final CLO message", () => {

    it("dealing with CLO message to CloseSecureChannel ", function(done) {

        const messageBuilder = new MessageBuilder();
        messageBuilder.on("message", (message) => {
            message.should.be.instanceof(CloseSecureChannelRequest);
            done();
        });
        const buffer = Buffer.from("434c4f46180000000c000000010000000f0000000f000000", "hex");

        messageBuilder.feed(buffer);



    });

})