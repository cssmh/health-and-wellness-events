import patient from "../../assets/momen.jpeg";
const Patient = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl text-custom-blue font-semibold mx-1 lg:mx-0">
        WHAT OUR PATIENTS SAY ABOUT US
      </h1>
      <p className="my-5 px-4 lg:px-0">
        Heartfelt Gratitude for Your Exceptional Care <br></br>
        <span className="text-custom-blue">Dear Dr. Kamrunnahar Kona,</span> <br></br>
        <span className="text-gray-500">
          I hope this message finds you in good health and high spirits. My name
          is Momin Hossain, and I am writing to express my deepest gratitude for
          the outstanding care and support you provided to my mother during her
          recent heart treatment. Your expertise, compassion, and dedication
          have made a significant impact on my mother's well-being, and we
          cannot thank you enough for your exceptional service. Your unwavering
          commitment to ensuring her comfort and recovery has not only eased her
          physical pain but also provided immense relief to our entire family.
          In times of uncertainty and distress, your reassuring demeanor and
          clear communication played a crucial role in helping us understand the
          complexities of my mother's condition. Your ability to empathize and
          address our concerns alleviated much of the anxiety we were
          experiencing. We are truly grateful for the personalized attention you
          gave to my mother, going above and beyond to ensure she received the
          best possible care. Your professionalism and kindness have left an
          indelible mark on our hearts, and we feel fortunate to have had you as
          her attending physician. Please accept our heartfelt thanks for your
          tireless efforts, your expertise, and the genuine care you have shown
          to my mother. Your contribution to her recovery is immeasurable, and
          we will forever be grateful for the positive impact you have had on
          our lives. Wishing you continued success in your noble profession, and
          may you continue to bring healing and hope to many more families.
          <br></br> With sincere appreciation,
        </span>
      </p>
      <div data-aos="zoom-in-up">
        <img src={patient} className="w-16 mx-auto rounded-3xl mb-1" alt="" />
        <p className="text-custom-blue">Md. Momin Hossain</p>
        <p>Heart Patients</p>
      </div>
    </div>
  );
};

export default Patient;
