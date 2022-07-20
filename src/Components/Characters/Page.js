import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Page() {
  const { id } = useParams();
  return <h1>{id}</h1>;
}