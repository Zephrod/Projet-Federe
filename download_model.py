from transformers import AutoTokenizer, AutoModelForCausalLM, pipeline

model_name = "medalpaca/medalpaca-7b"  # ✅ Le bon modèle

# ⚠️ Remplace 'token="..."' si tu n'as pas déjà fait `huggingface-cli login`
token = "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"  # Ton token Hugging Face ici

print("📦 Téléchargement du tokenizer...")
tokenizer = AutoTokenizer.from_pretrained(model_name, use_fast=False, token=token)  # Forcer le tokenizer lent

print("🧠 Téléchargement du modèle...")
model = AutoModelForCausalLM.from_pretrained(model_name, token=token)

# Test rapide avec pipeline de génération de texte
pipe = pipeline("text-generation", model=model, tokenizer=tokenizer)
prompt = "Un patient se plaint de douleurs abdominales et de nausées. Que peut-on suspecter ?"
result = pipe(prompt, max_new_tokens=100)
print(result[0]["generated_text"])
