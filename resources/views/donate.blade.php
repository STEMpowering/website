@extends('layout.main')
@section('container')

<div class="container">
<div class="row feature-item">
          <div class="col-lg-6 aos-init aos-animate" data-aos="fade-right" data-aos-delay="100">
            <img src="assets/img/studyingicon.png" class="img-fluid" alt="">
          </div>
          <div class="col-lg-6 wow fadeInUp pt-5 pt-lg-0 aos-init aos-animate" data-aos="fade-left" data-aos-delay="150">
            <h4>Donate And Become A Sponsor</h4>
            <p>
            With a rapidly developing society comes the need to educate future generations. STEM education is without a doubt a necessity for students as it opens multiple doors for future opportunities, discoveries, and the advancement of our world. STEM education allows students to develop many essential skills to help them achieve their full potential. Here at STEM Powering, our aim is to provide barrier free access to STEM education opportunities for students who aren't able to participate in these programs. Through your donation, you are helping to provide a deserving student with the opportunity to discover their full potential.
            </p>
            <h4>Your Donation Will Support:</h4>
            <p>
            <ul>
  <li>The continuation of creating content for activity materials, workshops, and events, so we can foster creativity and increase learning among students of all ages.</li>
  <li>Provide volunteer opportunities for students to take what they learn and implement it in their own community to continue breaking barriers against STEM education.</li>
  <li>STEM Powering advocacy work that focuses on removing barriers to create structural change and encourage more underrepresented communities to learn STEM.</li>
</ul> 
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
													<input type="hidden" name="cmd" value="_s-xclick">
													<input type="hidden" name="hosted_button_id" value="62ZSGNK7NUF8Q">
													<input type="image" src="https://www.sonyalooney.com/wp-content/uploads/paypal-donate-button-300x116.png" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button">
													<img alt="" border="0" src="https://www.paypal.com/en_CA/i/scr/pixel.gif" width="1" height="1">
												</form>
            </p>
          </div>

        
        </div>
        </div>
@stop