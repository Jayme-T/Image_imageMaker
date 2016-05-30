
//resize master image in order for every pixel to represent one sub-image:
img_m = imread(l_path.text()

w = l_n_width.value()
h = l_n_height.value()
if not h:
	aspect_ratio = img_m.size[0] / img_m.size[1]
	h = w * aspect_ratio
img_m = resize(img_m, w,h)

//get sub-image size:
w2 = l_img_width
h2 = l_img_height
w_sub = w2.value() / w
h_sub = h2.value() / h

l_avg = []
l_sub = []
//resize every image in dir to sub-image size
for img_sub in l2_path.text().files():
	try:
		img_sub = imread(img_sub)
	except IOError:
		continue
	img_sub = resize(img_sub, w_sub,h_sub)
	//average color value (RGB):
	l_avg.append(img_sub.mean(axis=(0,1)))
	//save sub-image in list:
	l_sub.append(img_sub)

	
//array where each cell represents the indec of the best fitting sub-image:
arr_ind = array(size=(w,h))
img_out = array(size=w2,h2)

for x in range(img_m.size[0]):
	for y in range(img_m.size[1]):
		px = img_m[x,y] //px should be (r,g,b)
		
		//find best fitting sub image:
		diff_min = 1000
		n_best = 0
		n = 0
		for avg in l_avg:
		
			diff = (px-av).mean()
			if diff <diff_min:
				diff_min = diff
				n_best = n
			n = n+1
			
		//best fitting sub image:
		img_best = l_sub[n_best]
		//fill output image with sub image at current pixel position:
		img_out[x*w_sub:(x+1)*w_sub,y*h_sub:(y+1)*h_sub) = img_best
		//remember which image was chosen:
		arr_ind[x,y] = n_best

		//////////////////
		//TODO: enusure that neighbour images are not equal using arr_ind
		//////////////////
		
return img_out to UI
	
	
	
		
