import streamlit as st
import torch
from torchvision import transforms
from PIL import Image
import argparse

CLASS_NAMES = ["ants", "bees"]
MODEL_NAME = "model_img_class.pt"


def predict(model_name, img_path):
    # load the model
    model = torch.load(model_name, map_location="cpu")

    # preprocess the image
    prep_img_mean = [0.485, 0.456, 0.406]
    prep_img_std = [0.229, 0.224, 0.225]
    transform = transforms.Compose(
        [
            transforms.Resize(256),
            transforms.CenterCrop(224),
            transforms.ToTensor(),
            transforms.Normalize(mean=prep_img_mean, std=prep_img_std),
        ]
    )
    image = Image.open(img_path)
    preprocessed_image = transform(image).unsqueeze(0)

    # predict the class
    model.eval()
    output = model(preprocessed_image)
    pred_idx = torch.argmax(output, dim=1)
    predicted_class = CLASS_NAMES[pred_idx]
    return predicted_class


def create_app(model_name):
    # title
    st.title("Image Classification App")

    # file uploader
    uploaded_file = st.file_uploader(
        "Choose an image to classify", type=["jpg", "jpeg", "png"]
    )
    if uploaded_file is not None:
        st.write("")

        # predict the class
        predicted_class = predict(model_name, uploaded_file)

        col_left, col_right = st.columns(2)

        # the Predict button with the predicted class
        with col_left:
            if st.button("Predict"):
                emoji = ":honeybee:" if predicted_class == "bees" else ":ant:"
                st.markdown(f"## {predicted_class}  {emoji}")

        # display the image
        with col_right:
            image = Image.open(uploaded_file)
            st.image(image)


def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--model", type=str, help="model name", default=MODEL_NAME
    )
    args = parser.parse_args()
    return args


if __name__ == "__main__":
    args = parse_args()
    create_app(model_name=args.model)
