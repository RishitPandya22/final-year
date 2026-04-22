# 🏥 AI Medical Disease Prediction System

![Python](https://img.shields.io/badge/Python-3.x-blue)
![Django](https://img.shields.io/badge/Backend-Django-092E20)
![React](https://img.shields.io/badge/Frontend-React%20%2F%20TypeScript-61DAFB)
![LLaMA](https://img.shields.io/badge/Model-Meta%20LLaMA%203B-purple)
![PyTorch](https://img.shields.io/badge/Framework-PyTorch-EE4C2C)
![Status](https://img.shields.io/badge/status-complete-brightgreen)

## 📌 Project Overview
A full-stack AI-powered medical assistant that analyses patient symptoms 
and generates detailed clinical responses using a fine-tuned 
**Meta LLaMA 3B language model** trained on medical datasets.

The system combines a **React/TypeScript frontend**, **Django REST backend**, 
and a **custom fine-tuned LLM** to simulate an intelligent medical diagnostic tool.

---

## 🏗️ System Architecture
┌─────────────────┐     REST API      ┌──────────────────┐
│   React / TSX   │ ───────────────► │   Django Backend  │
│    Frontend     │ ◄─────────────── │    (REST API)     │
└─────────────────┘                  └────────┬─────────┘
│
▼
┌──────────────────────┐
│  Meta LLaMA 3B Model  │
│  (Fine-tuned on       │
│   Medical Data)       │
│  PyTorch + DirectML   │
└──────────────────────┘
---

## ✨ Key Features
- 🧠 **Fine-tuned LLaMA 3B** — Meta's large language model adapted 
  specifically for medical question answering
- 💬 **Symptom to Diagnosis** — User describes symptoms in natural 
  language, model returns detailed clinical reasoning
- ⚡ **AMD GPU Optimised** — Uses DirectML for efficient inference 
  on AMD hardware
- 🌐 **Full Stack Web App** — Complete React frontend with Django 
  REST API backend
- 🔍 **Chain-of-thought reasoning** — Model thinks through symptoms 
  before generating response using structured prompt engineering

---

## 🤖 Model Details
| Property | Detail |
|----------|--------|
| Base Model | Meta LLaMA 3B |
| Fine-tuning | Google Colab |
| Framework | PyTorch + Transformers (HuggingFace) |
| Precision | float16 (memory optimised) |
| GPU Support | AMD via torch-directml |
| Max Response | 1,200 tokens |

---

## 🛠️ Tech Stack

### Frontend
- **React** with **TypeScript (.tsx)**
- Component-based UI for symptom input and response display

### Backend
- **Django** REST Framework
- Handles API requests between frontend and ML model
- Model loading and inference pipeline

### Machine Learning
- **HuggingFace Transformers** — model loading and tokenization
- **PyTorch** — deep learning framework
- **torch-directml** — AMD GPU acceleration
- **Google Colab** — model fine-tuning environment

---

## 🔬 How It Works
1. User enters symptoms in natural language via the React frontend
2. Frontend sends POST request to Django REST API
3. Django passes symptoms to the LLaMA model using structured 
   medical prompt template
4. Model applies clinical reasoning and generates diagnostic response
5. Response is cleaned, formatted and returned to the frontend
6. User receives detailed medical analysis

---

## 💡 Prompt Engineering
The model uses a structured medical prompt template that:
- Frames the model as a medical expert
- Encourages step-by-step clinical reasoning via `<think>` tags
- Ensures responses follow a logical diagnostic format

---

## 📁 Project Structure
final-year/
│
├── frontend/               ← React / TypeScript UI
│   └── src/
│       └── components/     ← UI components
│
├── backend/                ← Django REST API
│   ├── api/                ← API endpoints
│   └── model/              ← LLaMA inference pipeline
│
├── .gitignore
└── README.md
---

## ⚠️ Note
The fine-tuned model weights (`Meta-3B-Medicalful`) are not included 
in this repository due to file size constraints. The model was trained 
on Google Colab using medical QA datasets and stored locally for inference.

---

## 👤 Author
**Rishit Pandya**
Master of Data Science Student
Adelaide, South Australia 🇦🇺

🔗 [GitHub Profile](https://github.com/RishitPandya22)
