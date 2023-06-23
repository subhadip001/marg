import React from "react";
import { Link, useParams } from "react-router-dom";
import mapDetailsData from "../../../store/mapDetailsData";

const MapDetailsPage = () => {
  const { mapPointId } = useParams();
  console.log(mapPointId);
  const mapPoint = mapDetailsData.find((map) => map.id === Number(mapPointId));
  return (
    <div className="font-['Lato']">
      <header className="bg-list text-secondary h-14 flex items-center">
        <div className="w-[95%] mx-auto">
          <span className="font-[900]">{mapPoint?.name}</span>
        </div>
      </header>
      <section className="w-[96%] mx-auto py-5">
        <div className="border border-secondary">
          <header className="bg-secondary h-10 flex items-center px-2">
            <span className="font-[900] text-white">Description</span>
          </header>
          <p className="px-2 py-4">{mapPoint?.desc}</p>
        </div>
        <div className="border border-secondary">
          <header className="bg-secondary h-10 flex items-center px-2">
            <span className="font-[900] text-white">3D Illustration</span>
          </header>
          <model-viewer
            alt="3D image"
            src={mapPoint?.glbUrl}
            ar
            ar-modes="webxr scene-viewer quick-look"
            seamless-poster
            shadow-intensity="1"
            camera-controls
            auto-rotate
          ></model-viewer>
        </div>
        <div className="flex h-10">
          <div className="w-[50%] border border-secondary px-2 flex items-center">
            <span className="font-[900] text-secondary">
              Historical Background
            </span>
          </div>
          <div className="w-[50%] border border-secondary px-2 flex items-center">
            <span>{mapPoint?.historicalBackground}</span>
          </div>
        </div>
        <div className="flex h-10">
          <div className="w-[50%] border border-secondary px-2 flex items-center">
            <span className="font-[900] text-secondary">Evolution</span>
          </div>
          <div className="w-[50%] border border-secondary px-2 flex items-center">
            <span>{mapPoint?.evolution}</span>
          </div>
        </div>
        <div className="border border-secondary">
          <header className="bg-secondary h-10 flex items-center px-2">
            <span className="font-[900] text-white">Characteristics</span>
          </header>
          <div className="flex h-9">
            <div className="w-[50%] border border-secondary px-2 flex items-center">
              <span className="">Year of Foundation</span>
            </div>
            <div className="w-[50%] border border-secondary px-2 flex items-center">
              <span>{mapPoint?.evolution}</span>
            </div>
          </div>
          <div className="flex h-9">
            <div className="w-[50%] border border-secondary px-2 flex items-center">
              <span className="">Location</span>
            </div>
            <div className="w-[50%] border border-secondary px-2 flex items-center">
              <span>{mapPoint?.evolution}</span>
            </div>
          </div>
          <div className="flex h-9">
            <div className="w-[50%] border border-secondary px-2 flex items-center">
              <span className="">Management Authority</span>
            </div>
            <div className="w-[50%] border border-secondary px-2 flex items-center">
              <span>{mapPoint?.evolution}</span>
            </div>
          </div>
          <div className="flex h-9">
            <div className="w-[50%] border border-secondary px-2 flex items-center">
              <span className="">Ownership</span>
            </div>
            <div className="w-[50%] border border-secondary px-2 flex items-center">
              <span>{mapPoint?.evolution}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-end my-5">
            <Link className="bg-secondary text-white px-3 py-2 rounded">Contribute to the MARG Project</Link>
        </div>
      </section>
    </div>
  );
};

export default MapDetailsPage;
