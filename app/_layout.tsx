import { Drawer } from "expo-router/drawer";
import React from "react";

export default function Layout() {
  return(
    <Drawer>
      <Drawer.Screen name="index" options={{title: "Pagina Inicial🏠 "}}/>
      <Drawer.Screen name="membros" options={{title: "Membros da Familia👩‍👧‍👦"}}/>
      <Drawer.Screen name="refrao" options={{title: "Refrão de Músicas❤️🎵"}}/>
      <Drawer.Screen name="sobremim" options={{title: "Detalhes Sobre Mim👤"}}/>
    </Drawer>
  )

}