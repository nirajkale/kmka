<template>
  <div class="padded-page" ref="top">
    <div class="approach">
      <h2>Our Approach To An Assignment</h2>
      <p>Our team of experts have designed an inclusive standard checklist for Audit. 
        We will customize this standard checklist as per the scope of work as mentioned above to adhere to the requirements as laid down by the statutory provisions of the 
        <b>Companies act, Income tax act & GST Act.</b> The Audit procedures shall be based upon such predefined Audit Programme.</p>
      <p>The Audit process would generally comprise of the following
        <ul>
          <li>Planning Phase</li>
          <li>Data Collection Phase</li>
          <li>Data Analysis Phase</li>
          <li>Report Finalisation Phase</li>
        </ul>
      </p>
      <p>The key objectives of the engagement shall be to form an opinion as to whether the auditee is operating in adherence to the provisions as laid down under the 
        <b>Companies act, income tax act & GST Act</b>.</p>
      <p>Our audits concentrate on delivering value added services, by taking audit issues up the Audit committee and Corporate Governance value chain. Transactional issues are resolved by bringing in control, policy and governance perspectives.)</p>
      <p>We abide by the Core Principles of Auditing, which are
        <ul>
          <li>Demonstrate integrity</li>
          <li>Demonstrate competence and due professional care</li>
          <li>Audit Opinion is objective and free from undue influence (independent)</li>
          <li>Align with the strategies, objectives and risks of the organization</li>
          <li>Align with the strategies, objectives and risks of the organization</li>
          <li>Is appropriately positioned and adequately resourced</li>
          <li>Demonstrate quality and continuous improvement</li>
          <li>Communicate effectively</li>
          <li>Is insightful, proactive, and future-focused</li>
          <li>Promote organizational improvement</li>
        </ul>
      </p>
      <p>Convinced yet ? <router-link class="btn-contact-light" link :to="{ path: 'home', query: { section: 'contact' }}">Contact Us</router-link> to get started</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Approach',
  mounted(){
    this.$store.commit("useDarkTheme", false);
    // let section = this.$route.query.section;
    // if(section!=undefined && section!=''){
    //   this.scrollTo(section);
    // }
  },
}
</script>

<style>

</style>