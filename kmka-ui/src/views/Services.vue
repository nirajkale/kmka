<template>
  <div class="padded-page">
    <div class="services-intro">
      <h2>Services We Offer</h2>
      <p>
        Our practice areas are Auditing, Assurance, Financial Instituion Audits,
        Financial Services,<br />
        Project Financing, Subsidy Projects, Taxation & Book Keeping
      </p>
    </div>
    <section class="service-container" id="audit-assurance" ref="audit-assurance">
      <!-- Auditing and Assurance -->
      <h3>Auditing and Assurance</h3>
      <ul>
        <li>Statutory Audit prescribed under various Laws</li>
        <li>Internal Audits of Corporate and Non Corporate entities</li>
        <li>Risk assurance & advisory services viz. Forensic Audit</li>
        <li>Management and Operational Audit</li>
        <li>Management Due Diligence Audit</li>
        <li>Physical Verification of Inventory & Assets</li>
        <li>Management SOP’s Audit</li>
      </ul>
    </section>
    <section class="service-container" id="fin-audits" ref="fin-audits">
      <!-- Financial Institution Audits -->
      <h3>Financial Institution Audits</h3>
      <ul>
        <li>Concurrent Audit</li>
        <li>Internal Audit</li>
        <li>Statutory Audit</li> 
        <li>Revenue Audit</li>
        <li>Stock Audit</li>
        <li>Branch Audit</li>
        <li>Due Diligence</li>
        <li>Forensic Audit</li>
        <li>Service Tax and E-TDS Audit/Returns</li>
        <li>System Audit</li>
        <li>First Investigation (FI) Audit</li>
        <li>Audit in accordance with the provision of statute governing banking industry</li>
        <li>Depository Participant Audit</li>
        <li>Credit Appraisal and Financial Analysis</li>
        <li>Compliance Check and Verification</li>
        <li>Risk & Fraud Detection</li>
      </ul>
    </section>
    <section class="service-container" id="taxation" ref="fin-subsidy">
      <!-- Financial Services & Subsidy Projects -->
      <h3>Financial Services & Project Financing & Subsidy Projects</h3>
      <ul>
        <li>Due Diligence</li>
        <li>Fraud Investigation and Dispute services</li>
        <li>Short Term and Long Term Fund Arrangement</li>
        <li>Short Term and Long Term Fund Arrangement</li>
        <li>Liasioning with Financial Institutions</li>
        <li>Syndication of Equity/Term Loans</li>
        <li>Working Capital Finance Proposal</li>
        <li>Financial assistance by way of Central Government & State Government Subsidy Schemes</li>
      </ul>
    </section>
    <section class="service-container" id="taxation" ref="taxation">
      <!-- taxation -->
      <h3>Taxation</h3>
      <ul>
        <li>Tax Audit & certification under Income Tax Laws</li>
        <li>Tax hearing before various Taxation Authorities</li>
        <li>E-TDS calculation, preparation and filing</li>
        <li>Appeals involving filing and appearance Before Appellate Tribunals and Settlement Commission</li>
        <li>Tax compliance, advice and planning</li>
        <li>Obtaining required registrations and licenses</li>
        <li>LBT Consultation and advice on issues, tax hearings</li>
        <li>Sales tax / VAT Registrations, input credits Returns and Assessments</li>
        <li>Expert Advice and Assistance in Customs duty and refund, CENVAT (central Excise)</li>
        <li>Expert Advice on GST implementation and Consultancy</li>
        <li>GST Annual Return Filing</li>
        <li>GST Audit report Filing</li>
        <li>VAT Audit and VAT return filing</li>
        <li>Consultancy on other Direct & Indirect tax matters.</li>
      </ul>
    </section>
    <section class="service-container" id="book-keeping" ref="book-keeping">
      <!-- book-keeping -->
      <h3>Book Keeping</h3>
      <ul>
        <li>Maintenance of statutory records under Various laws</li>
        <li>Finalisation of accounts</li>
        <li>Preparation of MIS reports</li>
        <li>Designing and implementing accounting system and internal controls</li>
      </ul>
    </section>
    <section class="service-container" id="company-law" ref="company-law">
      <!-- Company Law Matters -->
      <h3>Company Law Matters</h3>
      <ul>
        <li>Company Formation & Management</li>
        <li>Listed Company compliances</li>
        <li>Legal deeds and documentation</li>
        <li>Maintenance of records, registers, books etc., required under the Companies Act, 2013</li>
        <li>Consultancy on various Company Law Matters and Compliances</li>
      </ul>
    </section>
  </div>
</template>

<script>

export default {
  name:"Services",
  mounted(){
    this.$store.commit("useDarkTheme", false);
    let section = this.$route.query.section;
    if(section!=undefined && section!=''){
      this.scrollTo(section);
    }
  },
  methods:{
    scrollTo(section){
      var element = this.$refs[section];
      element.scrollIntoView({ behavior: 'smooth' });
    },
  }
}
</script>
