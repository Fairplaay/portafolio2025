#!/bin/bash

# Script para verificar configuración de ESLint en Antigravity

echo "🔍 Verificando configuración de ESLint..."
echo ""

# 1. Verificar que ESLint está instalado
echo "1️⃣ Verificando instalación de ESLint..."
if pnpm exec eslint --version > /dev/null 2>&1; then
    VERSION=$(pnpm exec eslint --version)
    echo "   ✅ ESLint instalado: $VERSION"
else
    echo "   ❌ ESLint NO está instalado"
    exit 1
fi

# 2. Verificar archivos de configuración
echo ""
echo "2️⃣ Verificando archivos de configuración..."

if [ -f "eslint.config.js" ]; then
    echo "   ✅ eslint.config.js existe"
else
    echo "   ❌ eslint.config.js NO existe"
fi

if [ -f ".prettierrc" ]; then
    echo "   ✅ .prettierrc existe"
else
    echo "   ❌ .prettierrc NO existe"
fi

if [ -f ".vscode/settings.json" ]; then
    echo "   ✅ .vscode/settings.json existe"
else
    echo "   ⚠️  .vscode/settings.json NO existe"
fi

# 3. Limpiar caché
echo ""
echo "3️⃣ Limpiando caché de ESLint..."
if [ -f ".eslintcache" ]; then
    rm -f .eslintcache
    echo "   ✅ Caché eliminada"
else
    echo "   ℹ️  No hay caché para eliminar"
fi

# 4. Verificar errores en App.vue
echo ""
echo "4️⃣ Ejecutando ESLint en src/App.vue..."
echo ""
pnpm exec eslint src/App.vue || true

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📋 NEXT STEPS:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Si los errores aparecen arriba pero NO en el editor:"
echo ""
echo "1. Presiona Ctrl+Shift+P"
echo "2. Ejecuta: ESLint: Restart ESLint Server"
echo "3. Ejecuta: Developer: Reload Window"
echo "4. Verifica el icono de ESLint en la barra inferior"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
