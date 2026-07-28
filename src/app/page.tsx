"use client";

import { useState } from "react";

interface SignatureData {
  nombre: string;
  telefono: string;
  fotoUrl: string;
}

function generarFirmaHTML(data: SignatureData): string {
  const nombre = data.nombre || "Nombre Apellido";
  const cargo = "Asesor/a comercial";
  const telefono = data.telefono || "000 000 0000";
  const fotoUrl =
    data.fotoUrl ||
    "https://distripen.com/img/cms/Firma%20Asesores%202025/Foto%20Prefil.png";

  return `<div style="max-width:700px;width:100%;margin-top:0;margin-right:auto;margin-bottom:0;margin-left:auto;">
  <table style="border-collapse:collapse;color:#212121;font-family:Helvetica,Arial,sans-serif;font-size:12px;width:100%;" cellspacing="0" cellpadding="0" border="0" align="left">
    <tbody>

      <tr>
        <!-- LOGO + DATOS + FOTO -->
        <td style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;" colspan="3">
          <table cellspacing="0" cellpadding="0" border="0" width="100%">
            <tbody>
              <tr>
                <!-- LOGO -->
                <td style="width:33%;text-align:center;vertical-align:middle;">
                  <img src="https://distripen.com/img/cms/Firma%20Asesores%202025/Logo.png" alt="Logo Distripen" width="175" style="max-width:175px;width:100%;height:auto;display:block;margin-top:0;margin-right:auto;margin-bottom:0;margin-left:auto;">
                </td>
                <!-- DATOS -->
                <td style="width:33%;padding-top:0;padding-right:10px;padding-bottom:0;padding-left:10px;vertical-align:middle;">
                  <p style="margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;">
                    <span style="font-family:'Arial Black','Arial Bold',Gadget,sans-serif;font-size:18px;font-weight:900;color:#333333;display:block;">${nombre}</span>
                  </p>
                  <p style="margin-top:4px;margin-right:0;margin-bottom:0;margin-left:0;">
                    <span style="background-color:#FFD93D;color:#333333;padding-top:7px;padding-right:10px;padding-bottom:7px;padding-left:10px;border-radius:50px;display:inline-block;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:bold;">${cargo}</span>
                  </p>

                  <!-- CONTACTO -->
                  <table cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                      <tr>
                        <td style="padding-top:2px;padding-right:8px;padding-bottom:2px;padding-left:0;vertical-align:middle;">
                          <img src="https://distripen.com/img/cms/Firma%20Asesores%202025/icono-whatsapp.png" alt="Celular" width="24">
                        </td>
                        <td style="padding-top:2px;padding-right:0;padding-bottom:2px;padding-left:0;vertical-align:middle;">
                          <span style="font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:bold;color:#212121;">${telefono} | (601) 482 4377</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-top:2px;padding-right:8px;padding-bottom:2px;padding-left:0;vertical-align:middle;">
                          <img src="https://distripen.com/img/cms/Firma%20Asesores%202025/icono-ubicacion.png" alt="Ubicación" width="21">
                        </td>
                        <td style="padding-top:2px;padding-right:0;padding-bottom:2px;padding-left:0;vertical-align:middle;">
                          <a style="color:#212121;text-decoration:none;" href="https://maps.app.goo.gl/BgW6YaRzJY255meK7" target="_blank">
                            <span style="font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:bold;color:#212121;">Carrera 68H No. 65 - 32, Bogotá</span>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-top:2px;padding-right:8px;padding-bottom:2px;padding-left:0;vertical-align:middle;">
                          <img src="https://distripen.com/img/cms/Firma%20Asesores%202025/icono-web.png" alt="Página web" width="24">
                        </td>
                        <td style="padding-top:2px;padding-right:0;padding-bottom:2px;padding-left:0;vertical-align:middle;">
                          <a style="color:#212121;text-decoration:none;" href="http://www.distripen.com/" target="_blank">
                            <span style="font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:bold;color:#212121;">www.distripen.com</span>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <!-- REDES -->
                  <table cellspacing="0" cellpadding="0" border="0" style="margin-top:15px;margin-right:0;margin-bottom:0;margin-left:0;border-collapse:collapse;">
                    <tbody>
                      <tr>
                        <td style="padding-top:0;padding-right:5px;padding-bottom:0;padding-left:0;vertical-align:middle;">
                          <a style="text-decoration:none;border:0;display:block;line-height:0;" href="https://es-la.facebook.com/distripen" target="_blank">
                            <img src="https://distripen.com/img/cms/Firma%20Asesores%202025/icono-faebook.png" alt="Facebook" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;">
                          </a>
                        </td>
                        <td style="padding-top:0;padding-right:5px;padding-bottom:0;padding-left:0;vertical-align:middle;">
                          <a style="text-decoration:none;border:0;display:block;line-height:0;" href="https://www.instagram.com/distripen/?hl=es" target="_blank">
                            <img src="https://distripen.com/img/cms/Firma%20Asesores%202025/icono-instagram.png" alt="Instagram" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;">
                          </a>
                        </td>
                        <td style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;vertical-align:middle;">
                          <a style="text-decoration:none;border:0;display:block;line-height:0;" href="https://co.linkedin.com/company/distripen" target="_blank">
                            <img src="https://distripen.com/img/cms/Firma%20Asesores%202025/icono-linkedin.png" alt="LinkedIn" width="24" height="24" style="display:block;border:0;outline:none;text-decoration:none;">
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <!-- FOTO PERFIL -->
                <td style="width:33%;text-align:center;vertical-align:middle;">
                  <img src="${fotoUrl}" alt="Foto perfil" width="180" style="max-width:180px;width:auto;height:auto;">
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>

      <!-- CERTIFICADOS -->
      <tr>
        <td style="border-top:0px solid #ddd;padding:5px 0px 5px 0px" colspan="3">
          <table cellspacing="0" cellpadding="0" border="0" width="100%">
            <tbody>
              <tr>
                <td style="width:25%;text-align:center;vertical-align:middle;padding:5px">
                  <img src="https://distripen.com/img/cms/Firma%20Asesores%202025/EQA.png" width="32" height="32" alt="EQA" style="height:32px;width:auto;max-width:100%;display:block;margin:0 auto;">
                  
                </td>
                <td style="width:25%;text-align:center;vertical-align:middle;padding:5px">
                  <img src="https://distripen.com/img/cms/Firma%20Asesores%202025/Fenalco.png" alt="Fenalco Solidario" width="28" height="28" style="height:28px;width:auto;max-width:100%;display:block;margin:0 auto;">
                  
                </td>
                <td style="width:25%;text-align:center;vertical-align:middle;padding:5px">
                  <img src="https://distripen.com/img/cms/Firma%20Asesores%202025/Smeta.png" alt="SMETA" width="24" height="24" style="height:24px;width:auto;max-width:100%;display:block;margin:0 auto;">
                </td>
                <td style="width:25%;text-align:center;vertical-align:middle;padding:5px">
                  <img src="https://distripen.com/img/cms/Firma%20Asesores%202025/ecovadis.png" alt="Ecovadis" width="20" height="20" style="height:20px;width:auto;max-width:100%;display:block;margin:0 auto;">
                </td>
              </tr>
              <tr>
                <td style="text-align:center;vertical-align:center;padding:0px">
                  <p style="font-size:0.8rem;color:#6d6d6d;margin:0px 0px 5px">
                    <b><font face="arial, sans-serif">ISO 9001 Calidad
                  </font></b></p>
                  
                </td>
                <td style="text-align:center;vertical-align:middle;padding:0px">
                  <p style="font-size:0.8rem;color:#6d6d6d;margin:0px 0px 5px">
                    <b><font face="arial, sans-serif">Carbono Neutro
                  </font></b></p>
                  
                </td>
                <td style="text-align:center;vertical-align:middle;padding:0px">
                  <p style="font-size:0.8rem;color:#6d6d6d;margin:0px 0px 5px">
                    <b><font face="arial, sans-serif">Comercio Ético                
                  </font></b></p>
                </td>
                <td style="text-align:center;vertical-align:middle;padding:0px">
                  <p style="font-size:0.8rem;color:#6d6d6d;margin:0px 0px 5px">
                    <b><font face="arial, sans-serif">Sostenibilidad y <br>Resp. Social
                  </font></b></p>
                </td>
              </tr>
              
            </tbody>
          </table>
        </td>
      </tr>

      <!-- BANNERS -->
      <tr>
        <td style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;" colspan="3">
          <p style="margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;text-align:center;padding-bottom:5px;">
            <a rel="noopener noreferrer" href="https://distripen.com/blog/" target="_blank">
              <img src="https://distripen.com/images/Banner-Correo-blog.png" alt="Banner Blog" width="700" style="width:100%;max-width:700px;height:auto;display:block;">
            </a>
          </p>
          <p style="margin-top:0;margin-right:0;margin-bottom:0;margin-left:0;text-align:center;">
            <a rel="noopener noreferrer" href="https://distripen.com/" target="_blank">
              <img src="http://distripen.com/images/base-firma_banner.gif" alt="Banner Distripen" width="700" style="width:100%;max-width:700px;height:auto;display:block;">
            </a>
          </p>
          <!-- AVISO LEGAL -->
          <p style="margin-top:15px;margin-right:0;margin-bottom:0;margin-left:0;text-align:justify;">
  Si desea diligenciar la encuesta de calidad, por favor ingrese 
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSeNvfBzRDKwUUuG8LSlFoF6YeNLKvHOywDGpjSJ2uvO107gZg/viewform" target="_blank">
    aquí
  </a>.
</p>
          <p style="font-family:Arial,Helvetica,sans-serif;font-size:10px;color:#555555;line-height:1.4;margin-top:15px;margin-right:0;margin-bottom:0;margin-left:0;text-align:justify;">
            AVISO LEGAL: La información contenida en este mensaje es confidencial y para uso exclusivo de la persona u organización a la cual está dirigida. Si no es el receptor autorizado, cualquier retención, difusión, distribución o copia de este mensaje es prohibida y sancionada por la ley. Si por error recibe este mensaje, por favor reenvíelo al remitente y borre el mensaje recibido inmediatamente. Los archivos anexos han sido escaneados y se cree que están libres de virus. Sin embargo, es responsabilidad del receptor asegurarse de ello. DISTRIPEN no se hace responsable por pérdidas o daños causados por su uso. Si desea diligenciar una No Conformidad, por favor ingrese <a rel="noopener noreferrer" style="color:#555555;" href="https://www.appsheet.com/newshortcut/d71ac75e-6f49-4870-b09d-e67dad77a0ba" target="_blank">aquí</a>.
          </p>
        </td>
      </tr>
    </tbody>
  </table>
</div>`;
}

export default function Home() {
  const [form, setForm] = useState<SignatureData>({
    nombre: "",
    telefono: "",
    fotoUrl: "",
  });

  const [copiado, setCopiado] = useState(false);
  const [mostrarCodigo, setMostrarCodigo] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const firmaHTML = generarFirmaHTML(form);
  const camposRequeridos = form.nombre.trim() !== "";

  const copiarAlPortapapeles = () => {
    // Create a temporary off-screen contenteditable element with the rendered HTML.
    // Selecting and copying from a rendered element sends rich HTML to the clipboard,
    // which is exactly what Gmail's signature editor needs.
    const container = document.createElement("div");
    container.setAttribute("contenteditable", "true");
    container.style.cssText =
      "position:fixed;top:-9999px;left:-9999px;opacity:0;pointer-events:none;";
    container.innerHTML = firmaHTML;
    document.body.appendChild(container);

    // Select all content inside the container
    const range = document.createRange();
    range.selectNodeContents(container);
    const selection = window.getSelection();
    if (selection) {
      selection.removeAllRanges();
      selection.addRange(range);
    }

    let success = false;
    try {
      success = document.execCommand("copy");
    } catch {
      success = false;
    }

    // Clean up
    if (selection) selection.removeAllRanges();
    document.body.removeChild(container);

    if (success) {
      setCopiado(true);
      setTimeout(() => setCopiado(false), 4000);
    } else {
      // Fallback: modern Clipboard API with HTML blob
      const blob = new Blob([firmaHTML], { type: "text/html" });
      const clipboardItem = new ClipboardItem({ "text/html": blob });
      navigator.clipboard.write([clipboardItem]).then(() => {
        setCopiado(true);
        setTimeout(() => setCopiado(false), 4000);
      }).catch(() => {
        alert("No se pudo copiar automáticamente. Por favor copia el código HTML manualmente.");
      });
    }
  };

  const campos = [
    {
      name: "nombre",
      label: "Nombre completo del asesor",
      placeholder: "Ej: Ana María Arias",
      required: true,
      type: "text",
    },
    {
      name: "telefono",
      label: "Teléfono / WhatsApp",
      placeholder: "Ej: 310 674 9048 | (601) 482 4377",
      required: false,
      type: "text",
    },
    {
      name: "fotoUrl",
      label: "URL de foto de perfil del asesor",
      placeholder: "Ej: https://distripen.com/img/cms/.../foto.png",
      required: false,
      type: "url",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-yellow-400 py-8 px-4 text-center shadow-md">
        <img
          src="https://distripen.com/img/cms/Firma%20Asesores%202025/Logo.png"
          alt="Distripen"
          className="h-12 mx-auto mb-3 object-contain"
        />
        <h1 className="text-2xl font-bold text-gray-800">Generador de Firma de Correo</h1>
        <p className="text-gray-700 text-sm mt-1">
          Llena los datos de la asesora, previsualiza y copia la firma con un clic
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Formulario */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-5">📝 Datos de la asesora</h2>
          <div className="space-y-4">
            {campos.map((campo) => (
              <div key={campo.name}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {campo.label}
                  {campo.required && <span className="text-red-500 ml-1">*</span>}
                </label>
                <input
                  type={campo.type}
                  name={campo.name}
                  value={form[campo.name as keyof SignatureData]}
                  onChange={handleChange}
                  placeholder={campo.placeholder}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
                />
              </div>
            ))}
          </div>

          <div className="mt-5 bg-blue-50 border border-blue-200 rounded-lg p-3 text-xs text-blue-700">
            <strong>💡 Tip:</strong> El logo de Distripen, los certificados, banners y aviso legal
            se incluyen automáticamente en todas las firmas. Solo necesitas cambiar los datos
            personales de cada asesora.
          </div>

          {!camposRequeridos && (
            <p className="mt-3 text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
              ⚠️ Completa el <strong>nombre</strong> para habilitar el botón de copiar.
            </p>
          )}
        </div>

        {/* Vista previa + Acciones */}
        <div className="space-y-5">
          {/* Preview */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">👁️ Vista previa</h2>
            <div className="border border-gray-200 rounded-lg p-3 bg-white overflow-auto">
              <div dangerouslySetInnerHTML={{ __html: firmaHTML }} />
            </div>
          </div>

          {/* Botón copiar */}
          <button
            onClick={copiarAlPortapapeles}
            disabled={!camposRequeridos}
            className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-sm ${
              camposRequeridos
                ? copiado
                  ? "bg-green-500 text-white cursor-default"
                  : "bg-yellow-400 hover:bg-yellow-500 text-gray-900 cursor-pointer"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            {copiado ? "✅ ¡Copiado al portapapeles!" : "📋 Copiar firma"}
          </button>

          {/* Instrucciones Gmail */}
          {copiado && (
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-sm text-green-800">
              <p className="font-semibold mb-2">🎉 ¡Listo! Pasos para pegar en Gmail:</p>
              <ol className="list-decimal list-inside space-y-1 text-green-700">
                <li>Abre <strong>Gmail</strong> en tu navegador</li>
                <li>
                  Haz clic en ⚙️ <strong>Configuración</strong> → &quot;Ver toda la
                  configuración&quot;
                </li>
                <li>
                  Ve a la pestaña <strong>General</strong> → sección <strong>Firma</strong>
                </li>
                <li>Crea o edita una firma y haz clic dentro del cuadro de texto</li>
                <li>
                  Pega con <strong>Ctrl+V</strong> (Windows) o <strong>Cmd+V</strong> (Mac)
                </li>
                <li>
                  Haz clic en <strong>&quot;Guardar cambios&quot;</strong> al final de la página
                </li>
              </ol>
            </div>
          )}

          {/* Toggle código HTML */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4">
            <button
              onClick={() => setMostrarCodigo(!mostrarCodigo)}
              className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2"
            >
              {mostrarCodigo ? "🔼 Ocultar código HTML" : "🔽 Ver código HTML (avanzado)"}
            </button>
            {mostrarCodigo && (
              <pre className="mt-3 text-xs bg-gray-900 text-green-400 rounded-lg p-3 overflow-auto max-h-64 whitespace-pre-wrap break-all">
                {firmaHTML}
              </pre>
            )}
          </div>
        </div>
      </div>

      <footer className="text-center text-xs text-gray-400 py-6">
        Generador de firmas Distripen · Uso interno
      </footer>
    </main>
  );
}