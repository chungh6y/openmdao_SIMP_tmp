#!/bin/bash 

python FEAsetup.py build
cp build/lib*/*.so ./
cp build/lib*/*.so ./../../../Density*/
