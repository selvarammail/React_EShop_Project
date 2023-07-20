import React, { useState } from "react";
import { Stepper, Step, StepLabel, Button } from "@material-ui/core";

const CreateOrderPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleConfirmOrder = () => {
    // Implement order confirmation functionality
  };

  return (
    <div>
      <Stepper activeStep={activeStep}>
        <Step>
          <StepLabel>Step 1: Choose Product</StepLabel>
        </Step>
        <Step>
          <StepLabel>Step 2: Add Address</StepLabel>
        </Step>
        <Step>
          <StepLabel>Step 3: Review Order</StepLabel>
        </Step>
      </Stepper>

      {activeStep === 0 && (
        <div>
          {/* Display product details and quantity input */}
          <button onClick={handleNext}>Next</button>
        </div>
      )}

      {activeStep === 1 && (
        <div>
          {/* Display address form and address selection dropdown */}
          <button onClick={handleBack}>Back</button>
          <button onClick={handleNext}>Next</button>
        </div>
      )}

      {activeStep === 2 && (
        <div>
          {/* Display order summary */}
          <button onClick={handleBack}>Back</button>
          <button onClick={handleConfirmOrder}>Place Order</button>
        </div>
      )}
    </div>
  );
};

export default CreateOrderPage;
