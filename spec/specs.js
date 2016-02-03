describe('Opportunities', function () {
  it("creates a new object Opportunities with given properties", function() {
    var testOpportunities = new Opportunities(1, "Portland, OR", 15, "NOW", "2016-07-29", "hunger homelessness OR Health & Wellness");
    jsonOportunities(testOpportunities);
    expect(testOpportunities.recordsReturn).to.equal(1);
    expect(testOpportunities.items.length).to.equal(1);
  });
});
describe('Organization', function() {
  it("creates a new orgainzation with given properties", function() {
     var testOrgization = new Organization("Portland Rescue Mission", "A place for homless people", "123 main st.", "Portland", "Oregon", "97123", "503-313-1234", "http://www.PortlandRescueMission.org");
     expect(testOrgization.organizationName).to.equal("Portland Rescue Mission");
     expect(testOrgization.organizationDescription).to.equal("A place for homless people");
     expect(testOrgization.street).to.equal("123 main st.");
     expect(testOrgization.city).to.equal("Portland");
     expect(testOrgization.state).to.equal("Oregon");
     expect(testOrgization.zip).to.equal("97123");
     expect(testOrgization.phone).to.equal("503-313-1234");
     expect(testOrgization.website).to.equal("http://www.PortlandRescueMission.org");
   });
   it("adds the address information into one string", function() {
     var testOrgization = new Organization("Portland Rescue Mission", "A place for homless people", "123 main st.", "Portland", "Oregon", "97123", "503-313-1234", "http://www.PortlandRescueMission.org");
     expect(testOrgization.fullAddress()).to.equal("123 main st., Portland, Oregon 97123");
   });
});
describe('OrganizationGroup', function() {
  it("creates an array of Organizations by given properties", function() {
    var testOrganizationGroup = new OrganizationGroup();
    expect(testOrganizationGroup.organizations).to.eql([]);
  });
});
