import React from 'react';
import './CancerInfo.css';
import breastCancerImage from '../assets/breastcancer.jpg';
import uterineCancerImage from '../assets/uterinecancer.jpg';

const CancerInfo = () => {
  return (
    <div className="info-page">
      <h1>Cancer Awareness</h1>

      {/* Breast Cancer Section */}
      <section className="cancer-section">
        <h2>Breast Cancer</h2>
        <img
          src={breastCancerImage}
          alt="Breast Cancer"
          className="cancer-img"
        />
        <p>
          Breast cancer is one of the most common types of cancer affecting women worldwide. It occurs when cells in the breast begin to grow uncontrollably. Symptoms may include lumps in the breast, changes in the skin or shape of the breast, and unusual discharge from the nipple. Early detection through regular screening and self-examination is crucial for improving survival rates.
        </p>
        
        <h3>Symptoms</h3>
        <ol>
          <li>A lump in the breast or underarm</li>
          <li>Unexplained pain in the breast or nipple area</li>
          <li>Change in the size, shape, or appearance of the breast</li>
          <li>Skin changes, such as redness or dimpling (resembling the texture of an orange peel)</li>
          <li>Nipple discharge, especially if it's bloody</li>
          <li>Swelling in the armpit or collarbone area</li>
          <li>A sudden change in the contour of the breast</li>
        </ol>

        <h3>Risk Factors</h3>
        <ol>
          <li>Age (increased risk with age, especially after 50)</li>
          <li>Family history of breast cancer (first-degree relatives)</li>
          <li>Inherited gene mutations (e.g., BRCA1 and BRCA2)</li>
          <li>Personal history of breast cancer or other breast diseases</li>
          <li>Hormonal factors (early menstruation, late menopause, or hormone replacement therapy)</li>
          <li>Lifestyle factors (diet, physical inactivity, alcohol consumption, and obesity)</li>
        </ol>

        <h3>Treatment Options</h3>
        <ol>
          <li>Surgery (Mastectomy or Tumor Removal)</li>
          <li>Chemotherapy</li>
          <li>Radiation Therapy</li>
          <li>Hormone Therapy</li>
          <li>Targeted Therapy</li>
          <li>Immunotherapy</li>
        </ol>
      </section>

      {/* Uterine Cancer Section */}
      <section className="cancer-section">
        <h2>Uterine Cancer</h2>
        <img
          src={uterineCancerImage}
          alt="Uterine Cancer"
          className="cancer-img"
        />
        <p>
          Uterine cancer, also known as endometrial cancer, begins in the lining of the uterus. It is most commonly diagnosed in postmenopausal women, although it can affect younger women as well. Symptoms of uterine cancer may include abnormal vaginal bleeding, pelvic pain, and changes in urinary or bowel habits. Early detection through pelvic exams and ultrasounds can greatly improve treatment outcomes.
        </p>

        <h3>Symptoms</h3>
        <ol>
          <li>Abnormal vaginal bleeding, especially after menopause</li>
          <li>Heavy or irregular menstrual periods</li>
          <li>Pelvic pain or discomfort, especially during urination or intercourse</li>
          <li>Pain during urination or bowel movements</li>
          <li>Unexplained weight loss or fatigue</li>
          <li>Vaginal discharge (may be clear, pink, or bloody)</li>
          <li>Pain in the lower abdomen or pelvis</li>
          <li>Swelling or bloating of the abdomen (in advanced cases)</li>
        </ol>

        <h3>Risk Factors</h3>
        <ol>
          <li>Obesity</li>
          <li>Age (especially after menopause)</li>
          <li>Hormonal imbalances</li>
          <li>Family history of uterine, ovarian, or breast cancer</li>
          <li>Diabetes</li>
          <li>History of endometrial hyperplasia</li>
          <li>Genetic syndromes (e.g., Lynch syndrome)</li>
        </ol>

        <h3>Treatment Options</h3>
        <ol>
          <li>Surgery (Hysterectomy)</li>
          <li>Chemotherapy</li>
          <li>Radiation Therapy</li>
          <li>Hormone Therapy</li>
          <li>Targeted Therapy</li>
          <li>Immunotherapy</li>
        </ol>
      </section>
    </div>
  );
};

export default CancerInfo;
