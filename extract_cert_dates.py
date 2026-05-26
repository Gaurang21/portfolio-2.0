import sys, os

try:
    import PyPDF2
except ImportError:
    os.system("python -m pip install pypdf2 -q")
    import PyPDF2

cert_dir = r"c:\Users\gaura\Desktop\Github Projects\portfolio-integrated\public\certifications"
pdfs = [f for f in os.listdir(cert_dir) if f.endswith(".pdf")]

for pdf in sorted(pdfs):
    path = os.path.join(cert_dir, pdf)
    try:
        with open(path, "rb") as f:
            reader = PyPDF2.PdfReader(f)
            text = ""
            for page in reader.pages:
                text += page.extract_text() or ""
        print(f"\n{'='*60}")
        print(f"FILE: {pdf}")
        print(text[:1000])
    except Exception as e:
        print(f"\n{'='*60}")
        print(f"FILE: {pdf}  ERROR: {e}")
